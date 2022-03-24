import {
  FileUploadField as FileUploadFieldType,
  Maybe
} from "@/graphql/generated/graphql";
import { HTMLInputTypeAttribs } from "@/types/enums";
import useGravityForm, {
  ACTION_TYPES,
  BaseFieldValue,
  FileUploadFieldValues
} from "@/hooks/use-gravity";
import { GravityFieldErrors } from "@/types/error-helpers";
import { useCallback, useEffect, useRef, useState, ChangeEvent } from "react";
import { blurDataURLShimmer } from "@/lib/shimmer";
import Image from "next/image";
import cn from "classnames";
import { format } from "date-fns";

export interface FileUploadFieldProps extends GravityFieldErrors {
  field: FileUploadFieldType;
  formId?: number | null;
  inputProps?: ReactUnwrapped<"input">;
  inputTypeOptions?: keyof typeof HTMLInputTypeAttribs;
}

const DEFAULT_FILE_STATE = [] as Maybe<File>[];

const getBase64Value = (
  img: File | Blob,
  callback: (imageBase64Value: string) => void
) => {
  const reader = new FileReader();

  reader.readAsDataURL(img);

  reader.onload = () => {
    callback(reader.result as string);
  };
};

const fileSizeValidator = (size: File["size"]): boolean => {
  // convert to MB in binary form: 2**10 bytes = 1024 bytes = 1 GB;
  // 2**20 bytes = 1024**2 = 1MB * 10 = 10MB
  // 10 MB Max; size < 1 ? true : false;
  return size / 1024 / 1024 / 10 < 1;
};

const fileTypeValidator = (type: File["type"]): boolean => {
  return (
    type === "image/jpeg" ||
    type === "image/jpg" ||
    type === "image/png" ||
    type === "image/gif"
  );
};

const FileUploadField = ({
  field,
  fieldErrors,
  formId: formmId,
  inputTypeOptions,
  inputProps
}: FileUploadFieldProps) => {
  const { id, errorMessage, value, values, description } = field;

  const [imageLoading, setImageLoading] = useState(false);
  const [imageBase64Value, setImageBase64Value] = useState<string | null>(null);
  const [size, setSize] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [modified, setModified] = useState<number>(0);
  const formIdConditional = id === formmId ? formmId : id;

  const [formIdState, setFormIdState] = useState<
    typeof formIdConditional | undefined
  >(formIdConditional);

  const formIdRef = useRef(formIdState);

  const htmlId = `field_${formIdConditional}_${id}`;

  const { state, dispatch } = useGravityForm();

  const fieldValue = state.find(
    (fieldValue: BaseFieldValue) => fieldValue.id === id
  ) as FileUploadFieldValues | null;

  const fileValue = fieldValue?.fileUploadValues || DEFAULT_FILE_STATE;

  const [fieldValueState, setFieldValueState] = useState<Maybe<File>>();

  const handleImageUpload = useCallback((file: Maybe<File>) => {
    if (!file) {
      setImageLoading(true);
      return;
    }

    if (file) {
      setModified(file.lastModified);
      setSize(file.size);
      setType(file.type);
      setName(file.name);
      setFieldValueState(file);
      return getBase64Value(file, imageBase64Value => {
        setImageBase64Value(imageBase64Value);
        setImageLoading(false);
      });
    }
  }, []);

  const handleUploadChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let targetFile = e.currentTarget.files && e.currentTarget.files.item(0);
    targetFile !== null &&
    handleImageUpload(targetFile) &&
    fieldValueState !== targetFile
      ? setFieldValueState(targetFile)
      : setFieldValueState(targetFile);

    console.log(
      fileValue
        .push(e.currentTarget.files && e.currentTarget.files?.item(0))
        .toString()
    );
    console.log({ ...(fileValue ?? "") });
    return dispatch({
      type: ACTION_TYPES.updateFileFieldValue,
      fieldValue: {
        id,
        fileUploadValues:
          e.currentTarget.files != null
            ? [e.currentTarget.files?.item(0)]
            : [null]
      }
    });
  };

  useEffect(() => {
    const formIdInnerRef = formIdRef?.current;
    (function FileUploadIIFE() {
      return formIdInnerRef?.valueOf() ===
        (formIdConditional || formIdState?.valueOf() || formIdRef?.current)
        ? () => {}
        : setFormIdState(formIdConditional);
    })();
  }, [id, formmId, formIdState, formIdConditional]);

  const photoSVG = (
    <svg
      stroke='currentColor'
      fill='none'
      viewBox='0 0 48 48'
      aria-hidden='true'>
      <path
        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  return (
    <div>
      <div>
        <div>
          <div>
            <label htmlFor={htmlId}>
              <span>{"Upload a File"}</span>
              <input
                {...inputProps?.input}
                id={inputProps?.input?.id ?? htmlId}
                accept={inputProps?.input?.accept ?? "*"}
                type={
                  inputTypeOptions?.includes("file") ? "file" : inputTypeOptions
                }
                onChangeCapture={e => {
                  const targetFile =
                    e.currentTarget.files && e.currentTarget.files.item(0);

                  targetFile !== null && handleImageUpload(targetFile);
                }}
                onChange={handleUploadChangeEvent}
              />
              <div>
                {imageLoading ? (
                  <Image
                    src={blurDataURLShimmer({ w: 200, h: 100 })}
                    placeholder='blur'
                    blurDataURL={blurDataURLShimmer({ w: 200, h: 100 })}
                    objectFit={"scale-down"}
                    layout='responsive'
                    className='relative object-bottom object-contain '
                    width={200}
                    height={100}
                    alt={blurDataURLShimmer({ w: 200, h: 100 })}
                  />
                ) : !imageLoading && imageBase64Value ? (
                  <div>
                    <Image
                      src={imageBase64Value}
                      placeholder='blur'
                      blurDataURL={blurDataURLShimmer({ w: 200, h: 100 })}
                      objectFit={"cover"}
                      layout='responsive'
                      className='relative object-bottom object-cover '
                      width={400}
                      height={200}
                      alt={blurDataURLShimmer({ w: 200, h: 100 })}
                    />
                  </div>
                ) : (
                  <div>{photoSVG}</div>
                )}
              </div>
            </label>
          </div>
          <p>{"PNG, JPG, JPEG, or GIF up to 10MB"}</p>
          <p>
            <span
              className={cn(
                size !== 0
                  ? fileSizeValidator(size)
                    ? "text-[#424242]"
                    : "text-red-900"
                  : "text-[#424242]"
              )}>{`size: ${
              size !== 0 ? (size / 1024 / 1024).toPrecision(4) + " MB" : "--"
            }`}</span>
            <span
              className={cn(
                type !== ""
                  ? fileTypeValidator(type)
                    ? "text-[#424242]"
                    : "text-red-900"
                  : "text-[#424242]"
              )}>{`type: ${type !== "" ? type : "--"}`}</span>
            <span className={"sr-only"}>{`${name !== "" ? name : "--"}`}</span>
            <span className={"sr-only"}>{`${
              modified !== 0
                ? format(modified, "LL/dd/yyyy") +
                  " at " +
                  format(modified, "h:mm aaa") +
                  format(modified, " O")
                : "--"
            }`}</span>
          </p>
        </div>
      </div>
      {description ? (
        <p
          className='field-description sr-only'
          id={`gform_${formIdRef.current}_field_${id}_p`}>
          {description ?? ""}
        </p>
      ) : null}
      {fieldErrors?.length
        ? fieldErrors.map((fieldError, j) => (
            <p
              key={parseInt(`${fieldError?.id}`, 10) ** -++j}
              className='error-message'>
              {fieldError?.message ?? errorMessage}
            </p>
          ))
        : null}
    </div>
  );
};

export default FileUploadField;

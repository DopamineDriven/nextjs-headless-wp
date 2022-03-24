import { format, formatDistanceToNow } from "date-fns";
import cn from "classnames";

export type ThreadTimeProps = {
  time: Date | number;
  props?: ReactUnwrapped<"p" | "span" | "time">;
  precedingDescription?: string;
};

const ThreadTime = ({ time, precedingDescription, props }: ThreadTimeProps) => (
  <p
    {...props?.p}
    className={cn(
      props?.p?.className
        ? props.p.className
        : "text-sm text-gray-800 flex select-none font-medium"
    )}>
    {`${precedingDescription}`}&nbsp;{" "}
    <time
      {...props?.time}
      className={cn(
        props?.time?.className
          ? props.time.className
          : "no-underline has-tooltip text-gray-800"
      )}
      dateTime={
        formatDistanceToNow(time, {
          // includeSeconds: true,
          addSuffix: true
        }) + " ago"
      }>
      {formatDistanceToNow(time)} {"ago"}
      <span
        {...props?.span}
        className={cn("tooltip font-normal", props?.span?.className ?? "")}>
        {format(time, "LL/dd/yyyy") + " at " + format(time, "h:mm aaa")}{" "}
        {" (" + format(time, "O") + ")"}
      </span>
    </time>
  </p>
);

export default ThreadTime;

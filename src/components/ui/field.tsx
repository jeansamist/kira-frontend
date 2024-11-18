import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format, isDate, isMatch, parse } from "date-fns";
import { Calendar as CalendarIcon, IconProps } from "iconsax-react";
import { ChangeEvent, FunctionComponent, ReactNode, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "./button";
import { Calendar } from "./calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./inputOTP";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export type FieldProps = React.ComponentProps<typeof Input> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formReturn: UseFormReturn<any>;
  label: ReactNode;
};

export const InputField: FunctionComponent<FieldProps> = ({
  formReturn,
  ...props
}) => {
  return (
    <FormField
      control={formReturn.control}
      name={props.name || ""}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export type SelectFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formReturn: UseFormReturn<any>;
  label: ReactNode;
  placeholder?: string;
  name: string;
  items: {
    value: string;
    label: ReactNode;
  }[];
  icon?: FunctionComponent<IconProps>;
};

export const SelectField: FunctionComponent<SelectFieldProps> = ({
  formReturn,
  label,
  name,
  placeholder,
  items,
  icon: Icon,
}) => {
  return (
    <FormField
      control={formReturn.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger icon={Icon}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="max-w-[500px] w-full">
              {items.map((item, key) => (
                <SelectItem key={key} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export type InputOTPFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formReturn: UseFormReturn<any>;
  label?: ReactNode;
  name: string;
};
export const InputOTPField: FunctionComponent<InputOTPFieldProps> = ({
  formReturn,
  label,
  name,
}) => {
  return (
    <FormField
      control={formReturn.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <InputOTP maxLength={4} {...field}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              {new Array(4).map((_v, key) => (
                <InputOTPSlot index={key} key={key} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export type DateFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formReturn: UseFormReturn<any>;
  label: ReactNode;
  placeholder?: string;
  name: string;
};

export const DateField: FunctionComponent<DateFieldProps> = ({
  label,
  name,
  formReturn,
  placeholder,
}) => {
  const [customDate, setcustomDate] = useState<string>("");
  const [selectedDate, setselectedDate] = useState<Date>(new Date());
  return (
    <FormField
      control={formReturn.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"white-border"}
                    className={cn(
                      "w-12 p-0 flex items-center justify-center gap-4",
                      !field.value && "text-muted"
                    )}
                  >
                    <CalendarIcon className="text-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    defaultMonth={selectedDate}
                    selected={isDate(field.value) ? field.value : selectedDate}
                    onSelect={(e) => {
                      setcustomDate(format(e || new Date(), "MM/dd/yyyy"));
                      setselectedDate(e || new Date());
                      field.onChange(e);
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <div className="w-[calc(100%-48px-8px)]">
                <Input
                  value={customDate}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (isMatch(e.target.value, "MM/dd/yyyy")) {
                      const dateParsed = parse(
                        e.target.value,
                        "MM/dd/yyyy",
                        new Date()
                      );
                      setselectedDate(dateParsed);
                      field.onChange(dateParsed);
                    }
                    setcustomDate(e.target.value);
                  }}
                  className="w-full"
                  placeholder={placeholder}
                />
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

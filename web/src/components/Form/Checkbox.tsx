import { Check } from "phosphor-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";


interface CheckboxProps {
  title: string;
  initialValue: boolean;
  setValue: (value: boolean) => void;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <>
      <CheckboxPrimitive.Root 
        className="w-6 h-6 p-1 bg-gray-900" 
        checked={props.initialValue}
        onCheckedChange={checked => checked ? props.setValue(true) : props.setValue(false)}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="w-4 h-4 text-emerald-400" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {props.title}
    </>
  )
}
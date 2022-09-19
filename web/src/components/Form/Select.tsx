import { Check, ArrowsOutLineVertical } from "phosphor-react";
import * as SelectPrimitive from "@radix-ui/react-select";


interface IGame {
  id: string;
  title: string;
}

interface SelectProps {
  title: string;
  placeholder: string;
  itens: IGame[];
  setValue: (value: string) => void;
}

export function Select(props: SelectProps) {
  return (
    <SelectPrimitive.Root onValueChange={props.setValue}>
      <SelectPrimitive.SelectTrigger aria-label={props.title} className="inline-flex items-center justify-between rounded py-0 px-4 text-sm h-11 bg-gray-900 text-white">
        <SelectPrimitive.Value placeholder={props.placeholder} />
        <SelectPrimitive.SelectIcon className="text-gray-500">
          <ArrowsOutLineVertical size={16} />
        </SelectPrimitive.SelectIcon>
      </SelectPrimitive.SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="overflow-hidden bg-gray-700 rounded shadow-md">
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-6 bg-white cursor-default" />

          <SelectPrimitive.Viewport className="p-[.375rem]">
            <SelectPrimitive.Group>
              <SelectPrimitive.Label className="py-3 px-6 text-xs text-gray-400">
              {props.title}
              </SelectPrimitive.Label>

              {props.itens.map(item => (
                <SelectPrimitive.Item 
                  key={item.id} 
                  value={item.id} 
                  className="text-sm text-white rounded flex items-center h-9 py-0 pr-9 pl-6 relative transition cursor-pointer hover:bg-gray-600"
                >
                  <SelectPrimitive.ItemText>
                    {item.title}
                  </SelectPrimitive.ItemText>

                  <SelectPrimitive.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                    <Check /> 
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}

            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-6 bg-gray-700 cursor-default" />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}


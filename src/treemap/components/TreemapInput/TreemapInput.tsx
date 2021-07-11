import { DataEntry } from '@/interface/treemap.interface';
import { FC, useCallback, useState } from 'react';
import { DataInput } from './DataInput';
import { RowNumberInput } from './RowNumberInput';


export interface TreemapInputProps {
  onDataChange?(data: DataEntry[]): void;
  onRowNumberChange?(value: number): void;
  defaultData?: DataEntry[];
}

export const TreemapInput: FC<TreemapInputProps> = ({
  onDataChange,
  onRowNumberChange,
  defaultData,
}) => {
  const [dataLength, setDataLength] = useState(defaultData?.length ?? 0);
  const handleDataChange = useCallback((list: DataEntry[]) => {
    onDataChange?.(list);
    setDataLength(list.length);
  }, [onDataChange]);

  return (
    <>
      <DataInput onChange={handleDataChange} defaultValue={defaultData} />
      <RowNumberInput onChange={onRowNumberChange} max={dataLength} defaultValue={dataLength} />
    </>
  );
};

import type { FilterOption } from '../types/dashboard';

type SelectFieldProps = {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
};

export function SelectField({ label, onChange, options, value }: SelectFieldProps) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </label>
  );
}

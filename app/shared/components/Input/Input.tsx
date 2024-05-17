interface IInput {
  className: string;
  type: string;
  name?: string;
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export default function Input({
  className,
  type,
  name,
  label,
  value,
  onChange,
}: IInput) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  );
}

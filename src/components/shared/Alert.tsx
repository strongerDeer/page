interface AlertProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick: () => void;
}

export default function Alert({
  open,
  title,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: AlertProps) {
  if (open === false) {
    return null;
  }

  return (
    <div className="bg-slate-900/50 fixed top-0 right-0 bottom-0 left-0 z-10">
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-80 ">
        <p className="font-bold text-2xl">{title}</p>
        {description ? <p className="">{description}</p> : null}
        <div className="flex justify-end">
          <button
            className="text-blue-500"
            type="button"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

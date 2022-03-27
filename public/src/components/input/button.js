import Spinner from '../misc/spinner.js';

const Button = ({ type="button",
  onClick,
  label="",
  icon="",
  title="",
  buttonColor="bg-green-400",
  borderColor="bg-green-600",
  labelColor="text-black",
  loading=false,
  disabled=false,
  extraClasses="",
}) => {
  return (
    <div title={title}
      className={`relative h-10 flex items-end justify-center ${extraClasses}`}>
      <button type={type}
        onClick={onClick}
        disabled={disabled}
        className={
          `p-4 h-10 w-full hover:border-b-0 focus:outline-none rounded-lg
           transform duration-300 flex items-center justify-center
           ${buttonColor} ${borderColor} 
           ${(disabled ? "opacity-50 " : "hover:h-9 border-b-4 ")} `
        }>
        {loading ?
          <Spinner /> :
          <div className={`flex flex-row items-center justify-center`}>
            <p className={`${((icon && label) ? "mr-2 " : " ")} ${labelColor}`}>
              {icon}
            </p>
            <p className={`whitespace-nowrap ${labelColor}`}>
              {label}
            </p>
          </div>
        }
      </button>
    </div>
  )
}

export default Button;

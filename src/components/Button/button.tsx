import '../../index.css';

interface ButtonProps {
  text : string;
}

export default function button(props: ButtonProps) {
  return (
    <div>
        <button className='btn serif'>{props.text}</button>
    </div>
  )
}


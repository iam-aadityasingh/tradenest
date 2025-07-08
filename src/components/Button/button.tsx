import '../../index.css';

interface ButtonProps {
  text : string;
}

export default function button(props: ButtonProps) {
  return (
    <div>
        <button className='btn'>{props.text}</button>
    </div>
  )
}


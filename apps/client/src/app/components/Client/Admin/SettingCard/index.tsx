import './setting-card.scss'

interface SettingProps {
  icon: any;
  name: string;
  description: string;
  click: any
}
const SettingCard = (props: SettingProps) => {
  return(
    <div className='d-flex p-2 setting-hover my-3' onClick={props.click}>
      <div>
        <i>{props.icon}</i>
      </div>
      <div className='ms-2'>
        <p className='mb-2'>{props.name}</p>
        <p className='fs-7 text-muted mb-2'>{props.description}</p>
      </div>
    </div>
  )
}
export default SettingCard;

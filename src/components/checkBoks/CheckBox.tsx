import Checkbox from '@mui/material/Checkbox';


interface CheckBoxProps{
    checked:boolean
    onChange:()=>void


}



export const CheckBox=({checked,onChange}:CheckBoxProps)=>{




    return (
        <Checkbox checked={checked} onChange={onChange} defaultChecked color="secondary" />


    )
}
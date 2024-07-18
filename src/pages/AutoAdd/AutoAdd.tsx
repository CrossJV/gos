import AutoAddForm from "../../components/autoAddForm/AutoAddForm.tsx";
import styles from './AutoAdd.module.css';
import cn from "classnames";

export default function AutoAdd() {
    return (
        <div className={cn(styles['add-form-add'])}>
            <AutoAddForm />
        </div>
    )
}
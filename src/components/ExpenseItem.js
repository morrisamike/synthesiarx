
import './ExpenseItem.css';

function ExpenseItem() {
    const d = new Date();
    const expenseDate = new Date(d.getFullYear().toString() ,d.getMonth().toString() ,d.getDate().toString());
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 264.95;
    return(
        <div className='expense-item'>
            <div>{'Todays Date:' +  expenseDate.toDateString()} </div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2> 
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
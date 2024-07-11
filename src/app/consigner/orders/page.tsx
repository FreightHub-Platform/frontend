import Orders from "../../../components/consigner/orders/Orders";
import OrdersTable from "../../../components/consigner/orders/OrdersTable/OrdersTable";
import styles from './orders.module.css'

const OrdersPage = () => {
    return (
        <div>
            <div>
                Orders
            </div>
            <div><Orders /></div>
            
        </div>
    )
};

export default OrdersPage;
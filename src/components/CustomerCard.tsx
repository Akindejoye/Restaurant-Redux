import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustmerCardType {
    id: string;
    name: string;
    food: string[]
}

const CustomerCard = ({ id, name, food}: CustmerCardType) => {

    const [customerFoodInput, setCustomerFoodInput] = useState('');

    const dispatch = useDispatch()

    return(
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">
                  {
                      food.map((food, index) => {
                          return <p key={index}>{food}</p>
                      })
                  }
              </div>
              <div className="customer-food-input-container">
                <input 
                    value={customerFoodInput} 
                    onChange={(e) => setCustomerFoodInput(e.target.value)}
                />
                <button 
                    onClick={() => {
                        if(!customerFoodInput) return;
                        dispatch(
                            addFoodToCustomer({
                                id,
                                food: customerFoodInput,
                            })
                        );
                        setCustomerFoodInput('');
                    }}
                >
                    Add
                </button>
              </div>
            </div>
        </div>
    );
}

export default CustomerCard;
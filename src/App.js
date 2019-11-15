import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
  } from "react-router-dom";

const items = [
    { id:1, name: "옷", price: 15000 },
    { id:2, name: "노트북", price: 15000 },
    { id:3, name: "핸드폰", price: 15000 },
];

function ItemDetailPage() {
    const { itemId } = useParams();
    const [ item ] = items.filter(item => item.id == itemId);

    return (
        <>
            <div>
                이름 : {item.name} 가격 : {item.price}
            </div>
        </>
    )
}

function App() {
    return (
        <Router>
        <>
            <ul>
                {items.map(item => 
                    <li key={item.id}>
                        <Link to={`/${item.id}`}>  {item.name} {item.price}원</Link>
                    </li>
                )}
            </ul>

            <Switch>
                <Route path="/:itemId">
                    <ItemDetailPage />
                </Route>
            </Switch>
        </>
        </Router>
    );
}

export default App;
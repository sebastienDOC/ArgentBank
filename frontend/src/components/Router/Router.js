import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Login from '../../pages/login';
import SignUp from '../../pages/sign-up';
import Account from '../../pages/account';
import Error from '../../pages/error';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}
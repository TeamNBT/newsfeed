import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  const location = useLocation();

  return isLogin ? children : <Navigate to="/signin" state={{ from: location }} replace />;
};

export default ProtectedRoute;

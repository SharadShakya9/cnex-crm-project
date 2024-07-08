import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CnexProject from "./app";
import Coupon from "./app/Coupon";
import { GlobalStyle } from "./shared/utils/globalStyle";
import Orders from "./app/Orders";
import Appointments from "./app/Appointments";
import Campaign from "./app/Campaign";
import Profile from "./app/Profile";
import Preorder from "./app/Preorder";
import DeliveryCharge from "./app/DeliveryCharge";
import Rating from "./app/Rating";
import Inventory from "./app/Inventory";
import ManageAppointment from "./app/ManageAppointment";
import Company from "./app/Company/Company";
import Categories from "./app/Categories";
import { AppContextProvider } from "./shared/context/AppContext";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./app/Home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home/>} />
                <Route path={"/cnex"} element={<CnexProject />}>
                  <Route path={"categories"} element={<Categories />} />
                  <Route path={"order"} element={<Orders />} />
                  <Route path={"coupon"} element={<Coupon />} />
                  <Route path={"appointment"} element={<Appointments />} />
                  <Route path={"manage"} element={<ManageAppointment />} />
                  <Route path={"inventory"} element={<Inventory />} />
                  <Route path={"campaign"} element={<Campaign />} />
                  <Route path={"profile"} element={<Profile />} />
                  <Route path={"preorder"} element={<Preorder />} />
                  <Route path={"deliverycharge"} element={<DeliveryCharge />} />
                  <Route path={"rating"} element={<Rating />} />
                  <Route path={"company"} element={<Company />} />
                </Route>
              
            </Routes>
          </BrowserRouter>
        </AppContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

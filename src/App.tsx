// import { useSelector, useDispatch } from "react-redux";
// import { AppDispatch } from "./store";
// import { participateInRaffle, withdrawFromRaffle } from "./store/slices/userSlice";
// import { selectIsParticipating } from "./store/selectors/isParticipating";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Base } from "./pages/Base/Base";
import { Raffles } from "./pages/Raffles/Raffles";
import { useTelegram } from "./hooks/useTelegram";

function App() {
    // const isParticipating = useSelector(selectIsParticipating);
    // const dispatch: AppDispatch = useDispatch();
    const { tg } = useTelegram();
    tg.expand(); // уточнить про режим открытия аппки
    tg.disableVerticalSwipes();

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={"/"} element={<Base />}>
                    <Route index element={<Raffles />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;

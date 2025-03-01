import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { participateInRaffle, withdrawFromRaffle } from "./store/slices/userSlice";
import { selectIsParticipating } from "./store/selectors/isParticipating";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Base } from "./pages/Base/Base";

function App() {
    const isParticipating = useSelector(selectIsParticipating);
    const dispatch: AppDispatch = useDispatch();

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={"/"} element={<Base />}></Route>
            </Routes>
            <div>
                <h2>Участие в розыгрыше</h2>
                <p>{isParticipating ? "Вы участвуете в розыгрыше" : "Вы не участвуете в розыгрыше"}</p>
                <button onClick={() => dispatch(participateInRaffle())}>Принять участие</button>
                <button onClick={() => dispatch(withdrawFromRaffle())}>Отменить участие</button>
            </div>
        </Suspense>
    );
}

export default App;

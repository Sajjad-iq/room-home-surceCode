import { useAppDispatch, useAppSelector } from '../ReduxHooks/ReduxHooks'
import { toggle } from '../../Redux/Reducers/imgReducer'

export default function Functions() {
    const isMobil_Nav_Active = useAppSelector(state => state.index.isMobil_Nav_Active)
    const dispatch = useAppDispatch()
    function Toggle() {
        dispatch(toggle())
    }

    return { isMobil_Nav_Active, Toggle }
}

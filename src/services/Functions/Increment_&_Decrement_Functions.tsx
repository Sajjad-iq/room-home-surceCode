import { useAppDispatch } from '../ReduxHooks/ReduxHooks'
import { add, remove } from '../../Redux/Reducers/imgReducer'


export default function Functions() {

    const dispatch = useAppDispatch()

    function Increment() {
        dispatch(add())
    }
    function Decrement() {
        dispatch(remove())
    }
    return { Increment, Decrement }
}

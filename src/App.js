import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {fetchUsers} from "./redux/user/user.thunk";
import {Container, Heading} from "@chakra-ui/react"


function App() {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.users)

    const users = usersData.users
    const loading = usersData.loading
    const error = usersData.error

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <Container maxW="container.sm" centerContent>
            {loading && <Heading>Loading...</Heading>}
            {error && !loading && <Heading>{error}</Heading>}
            {users && users.map(item => <Heading key={item.id} my={2}>{item.name}</Heading>)}
        </Container>
    );
}

export default App;

import {memo, useState} from "react";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounterSecret = (props: any) => {
    console.log('Counter')
    return <div> {props.count} </div>
}
const NewMessagesCounter = memo(NewMessagesCounterSecret)

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users')
    return (
        <div>
            {props.users.map( (u, i) => <div key={i}> {u} </div>)}
        </div>
    )
}
const Users = memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState<number>(3)
    const [users, setUsers] = useState<string[]>(['a','b','c'])

    const addUser = () => {
        setUsers([...users, 'new' + ' ' + new Date().getTime()])
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter} />
            <Users users={users} />
        </>
    )
}
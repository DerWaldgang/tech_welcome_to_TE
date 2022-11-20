import { Component, memo, PureComponent } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
))

// functional component

const customComparator = (prevProps, nextProps) => {
    return (nextProps.user.name === prevProps.user.name && nextProps.user.age === prevProps.user.age) 
};
const SecondComponent = memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
),customComparator)

// class component
class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component
class FourthComponent extends Component<IProps> {

    shouldComponentUpdate(nextProps, nextState) { 
        return (nextProps.user.name !== this.props.user.name && nextProps.user.age !== this.props.user.age)
    }

    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}

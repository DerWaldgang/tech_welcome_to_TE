import { Fragment, memo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    return (
        <Fragment>
            <ChildComponent user={user} />
        </Fragment>
    );
};


const customComparator = (prevProps, nextProps) => {

    // раз дефолтное значение всегда одно и тоже просто проверяем на предыдущий пропс
    return (JSON.stringify(nextProps.user) === JSON.stringify(prevProps.user))
  };
// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
},customComparator);

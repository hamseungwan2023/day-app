const Clock = ({ today }) => {
    return (
        <div>
            <h1>{today.toLocaleTimeString()}</h1>
            <h2>{today.toLocaleDateString()}</h2>
        </div>
    );
};

export default Clock;

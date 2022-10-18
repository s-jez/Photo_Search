const Modal = (props) => {
    const {handleClose, show, children} = props;
    return (
        <div>
            <div>{children}</div>
            <div>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}
export default Modal
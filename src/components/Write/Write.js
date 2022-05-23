import './write.css';

const Write = () => {
    return (
        <>
            <div className="write">
            <img className="writeImg" src="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <form className="writeform">
                    <div className="writeformGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                        <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                    </div>
                    <div className="writeformGroup">
                        <textarea type="text"  className="writeInput writetext" placeholder="Tell your Story . . .">
                        </textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>

                </form>
            </div>
        </>
    );
};

export default Write;

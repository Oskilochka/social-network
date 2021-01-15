import React from 'react'
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                { this.state.editMode
                    ?
                        <div>
                            <input autoFocus={true} value={this.props.status}/>
                            <button onClick={ this.deactiveEditMode.bind(this) }> SAVE </button>
                        </div>
                    :
                        <div>
                            <span onDoubleClick={ this.activeEditMode.bind(this)  }> {this.props.status} </span>
                        </div>

                }
            </>
        )
    }
}

export default ProfileStatus;
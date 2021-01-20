import React from 'react'
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    toogleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        if(this.state.editMode === false ) {
            this.props.updateStatus(this.state.status)
        }
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                { this.state.editMode
                    ?
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.toogleEditMode }/>
                        </div>
                    :
                        <div>
                            <span onDoubleClick={ this.toogleEditMode  }> {this.props.status || 'No status'} </span>
                        </div>

                }
            </>
        )
    }
}

export default ProfileStatus;
import React from "react";
import CreateKegForm from "./CreateKegForm";
import KegList from "./KegList";
import KegDetails from "./KegDetails";
import EditKegForm from "./EditKegForm";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false
    }
  }

  componentDidMount(){
    const data = localStorage.getItem('MAIN_KEG_LIST');
    if(data !== null){
      this.setState({mainKegList: JSON.parse(data)})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.mainKegList !== this.state.mainKegList){
      localStorage.setItem('MAIN_KEG_LIST', JSON.stringify(this.state.mainKegList));
    }
  }

  handleClick = () => {
    if (this.state.editing){
      this.setState({
        formVisible: false,
        editing: false
      })
    } else if(this.state.selectedKeg != null) {
      this.setState({
        formVisible: false,
        selectedKeg: null
      });
    } else {
    this.setState(prevState => ({formVisible: !prevState.formVisible}));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList, formVisible: false})
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.find(keg => keg.id === id);
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    })
  }

  handleEditClick = () => {
    console.log("edit click")
    this.setState({editing: true})
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleDecrementingPints = (id) => {
    const targetKeg = this.state.mainKegList.find(keg => keg.id === id);
    const updatedTargetKeg = {...targetKeg, remainingPints: targetKeg.remainingPints - 1}
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== id)
      .concat(updatedTargetKeg);
    this.setState({
      mainKegList: editedMainKegList
    })
  }

  render(){
    let visibleState = null;
    let buttonText=null;
    if (this.state.editing){
      visibleState = <EditKegForm game={this.state.selectedKeg} 
      onEditKeg={this.handleEditingKegInList}/>
      buttonText="Return to Keg"
    } else if(this.state.selectedKeg != null) {
      visibleState = <KegDetails 
        keg = {this.state.selectedKeg}
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingKeg}
      />
      buttonText = "Return to Keg List"
    } else if(this.state.formVisible){
      visibleState = <CreateKegForm onKegCreation={this.handleAddingNewKegToList} />;
      buttonText="Return to Keg List";
    } else {
      visibleState = <KegList 
      kegList={this.state.mainKegList}
      onDecrementPints={this.handleDecrementingPints}
      onKegSelection={this.handleChangingSelectedKeg}
      />
      buttonText="Add Keg";
    }
    return(
      <>
        {visibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default KegControl;
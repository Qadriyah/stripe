export const attachToParentComponent = component => {
    const { parent, name } = component.props;
    parent.setState(state => ({
        inputs: { ...state.inputs, [name]: component }
    }));
}

export default {
    attachToParentComponent
}
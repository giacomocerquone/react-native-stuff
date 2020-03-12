export function Touchable(props) {
  const { children, onPress, onLongPress, style, useForeground } = props;
  return Platform.OS === 'ios' ? (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={style}
      {...props}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      useForeground={
        TouchableNativeFeedback.canUseNativeForeground() && useForeground
          ? true
          : null
      }
      {...props}
    >
      {children}
    </TouchableNativeFeedback>
  );
}

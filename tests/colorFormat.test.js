function formatColor(color) {
  const trimmed = color.trim().toLowerCase();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

test('formats color with capital first letter', () => {
  expect(formatColor('  RED ')).toBe('Red');
  expect(formatColor('blue')).toBe('Blue');
});

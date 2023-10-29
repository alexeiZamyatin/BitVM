const seed = '<<my_secret_seed>>'

const program = [
`
//
//
// Example of a Byte Commitment
//
//


//
// Unlocking Script
//
`,
    u8_state_unlock(seed, 'my_varA', 0b11100100),
`
// ----------------------

//
// Program (four 2-bit commitments)
//
`,
    u8_state(seed, 'my_varA'),
    `<${0b11100100}>`,
    'OP_EQUALVERIFY',
    '// Success! The value was correct'

].join('\n')

document.write(`<pre>${program}</pre>`)
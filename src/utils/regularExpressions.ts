// Regular Expressions' requirements:
//      + email:
//          - only latin characters;
//          - all special characters allowed;
//          - only one "@";
//      + password:
//          - only latin characters;
//          - at least 8 characters;
//          - at least 1 uppercase character;
//          - at least 1 lowercase character;
//          - at least 1 punctuation character;

export const RegularExpressions = {
    // email: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g,
    email: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /^(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\W+).*$/,
}
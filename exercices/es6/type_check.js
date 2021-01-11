// Implémentez les fonctions suivantes :
// type_check_v1: check que le type du premier argument est égal au type passé en deuxième argument | type_check_v1(1, 'number') => true
// type_check_v2: pareil mais avec de la conf (type, value, enum) | type_check_v2('john', {type: 'string', value: 'doe'}) => false
// type_check: pareil mais récursif | type_check({ foo: 'bar' }, { type: 'object', properties: { foo: { type: 'string', value: 'bar' }}}) => true


type_check_v1(1, 'number') === true
type_check_v1('foo', 'string') === true
type_check_v1({bar: 'foo'}, 'object') === true

type_check_v2('john', {type: 'string', value: 'john'}) === true
type_check_v2('john', {type: 'string', enum: ['john', 'doe']}) === true

type_check({ foo: 'bar' }, { 
    type: 'object',
    properties: {
        foo: {
            type: 'string',
            value: 'bar'
        }
    }
}) === true
var assert = { ok: ok, equal: equal };

function ok( isRight, msg ) {
    if ( isRight ) return;
    var err = Error( msg );
}

function equal( expected, actual, msg ) {
    if ( expected === actual ) return;
    var err = Error( msg );
    err.expected = expected;
    err.actual   = actual;
    err.operator = ' ㄉ ';
    throw err;
}

var commonErr = null;
var commonErrCount = 0;

before( function () {
    console.log( '> Mocha 測試開始' );
} );

after( function () {
    console.log( '> Mocha 測試結束' );
} );

beforeEach( function () {
    commonErrCount++;
    var err = Error( '通用錯誤 (' + commonErrCount + ')。' );
    commonErr = err;
} );

var diffErr = Error( '比較錯誤。' );
diffErr.expected = '絕對\n預期\n絕對';
diffErr.actual   = '絕對\n事實\n絕對';
diffErr.operator = ' ㄉ ';

describe( 'example', function () {
    it( 'test OK', function () {
        assert.ok( true );
    } );

    describe( 'but', function () {
        it( 'test diff expected actual', function () {
            throw diffErr;
        } );
    } );
} );


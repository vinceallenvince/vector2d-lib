// test/main.js
var should = require('should');
var Vector = require('../lib/vector2d-lib');

describe('Vector', function() {

	var obj;

  beforeEach(function() {
    obj = new Vector(22, 10);
  });

  afterEach(function() {
    obj = null;
  });

  it("should create vectors.", function() {
    obj.x.should.eql(22);
    obj.y.should.eql(10);
  });

  it('VectorAdd() should add two vectors.', function() {
    objA = new Vector(1, 1);
    Vector.VectorAdd(obj, objA).x.should.eql(23);
    Vector.VectorAdd(obj, objA).y.should.eql(11);
  });

  it('add() should add a vector.', function() {
    obj.add(new Vector(1, 1));
    obj.x.should.eql(23);
    obj.y.should.eql(11);
  });

  it('VectorSub() should subtract two vectors.', function() {
    objA = new Vector(1, 1);
    Vector.VectorSub(obj, objA).x.should.eql(21);
    Vector.VectorSub(obj, objA).y.should.eql(9);
  });

  it('sub() should subtract a vector.', function() {
    obj.sub(new Vector(1, 1));
    obj.x.should.eql(21);
    obj.y.should.eql(9);
  });

  it('VectorMult() should multiply a vector by a scalar value.', function() {
    Vector.VectorMult(obj, 2).x.should.eql(44);
    Vector.VectorMult(obj, 2).y.should.eql(20);
  });

  it('mult() should multiply a vector.', function() {
    obj.mult(2);
    obj.x.should.eql(44);
    obj.y.should.eql(20);
  });

  it('VectorDiv() should divide a vector by a scalar value.', function() {
    Vector.VectorDiv(obj, 2).x.should.eql(11);
    Vector.VectorDiv(obj, 2).y.should.eql(5);
  });

  it('div() should divide a vector.', function() {
    obj.div(2);
    obj.x.should.eql(11);
    obj.y.should.eql(5);
  });

  it('mag() should calculate the magnitude of a vector.', function() {
    obj = new Vector(10, 10);
    obj.mag().should.eql(14.142135623730951);
  });

  it('limit() should limit the magnitude of a vector.', function() {
    obj = new Vector(10, 10);
    obj.limit(5).mag().should.eql(5);
  });

  it('normalize() should divide a vector by its magnitude to reduce its magnitude to 1.', function() {
    obj = new Vector(3, 4);
    obj.normalize().x.should.eql(0.6);
    obj.normalize().y.should.eql(0.8);
  });

  it('VectorDistance(v1, v2) should return the distance between two vectors.', function() {
    objA = new Vector(50, 100);
    objB = new Vector(100, 100);
    Vector.VectorDistance(objA, objB).should.eql(50);
  });

  it('distance() should calculate the distance between this vector and a passed vector.', function() {
    obj = new Vector(5, 0);
    obj.distance(new Vector(1, 0)).should.eql(4);
  });

  it('rotate() should rotate a vector using a passed angle in radians.', function() {
    obj = new Vector(10, 0);
    obj.rotate(Math.PI).x.should.eql(-10);
  });

  it('VectorMidPoint(v1, v2) should return the midpoint between two vectors.', function() {
    objA = new Vector(50, 100);
    objB = new Vector(100, 200);
    Vector.VectorMidPoint(objA, objB).x.should.eql(75);
    Vector.VectorMidPoint(objA, objB).y.should.eql(150);
  });

  it('midpoint() should return the midpoint between this vector and a passed vector.', function() {
    objA = new Vector(50, 100);
    objB = new Vector(100, 200);
    objA.midpoint(objB).x.should.eql(75);
    objA.midpoint(objB).y.should.eql(150);
  });

  it('Vector.VectorAngleBetween should return the angle between two Vectors.', function() {
    objA = new Vector(50, 0);
    objB = new Vector(50, 180);
    Math.round(Vector.VectorAngleBetween(objA, objB)).should.eql(1);
  });
});
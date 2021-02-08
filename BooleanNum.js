class BooleanNum {
  constructor(input = 0) {
    this.a = 0;
    if (input instanceof Number) {
      if (input > 1 || input < 0 || isNaN(input)) {
        throw new Error('input out of range');
      } else {
        this.a = (input < 0.5) ? 0 : 1;
      }
    } else if (input instanceof String) {
      this = new BooleanNum(Number(String));
    } else throw new Error('unsupported type')
  }
  add(b) {
    // 0 + x = x
    // x + 0 = x
    // if a and b = 1 then oof
    if (this.a == 0) return b;
    else if (b.a == 1) throw new Error('out of range');
    return this;
  }
  sub(b) {
    if (b.a == 0) return this;
    else if (this.a == 0) throw new Error('out of range');
    return new BooleanNum;
  }
  mul(b) {
    if (this.a == 0 || b.a == 0) return new BooleanNum;
    else return new BooleanNum(1);
  }
  div(b) {
    if (b.a == 0) throw new Error('dividing by 0');
    else return this;
  }
  log() {
    if (this.a == 0) throw new Error('cannot do log(0)');
    else return new BooleanNum;
  }
  pow(b) {
    if (this.a == 1) return this;
    else if (b.a == 0) throw new Error('cannot do 0^0');
  }
}

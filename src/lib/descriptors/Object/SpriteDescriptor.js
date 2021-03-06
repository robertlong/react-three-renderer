import THREE from 'three';
import Object3DDescriptor from './Object3DDescriptor';

import ResourceReference from '../../Resources/ResourceReference';
import invariant from 'fbjs/lib/invariant';

class SpriteDescriptor extends Object3DDescriptor {
  constructor(react3Instance) {
    super(react3Instance);
  }

  construct(props) {
    const material = props.hasOwnProperty('material') ? props.material : undefined;
    const sprite = new THREE.Sprite(material);

    if (!material) {
      sprite.material.dispose();
      sprite.material = undefined;
    }

    return sprite;
  }

  _invalidChild = child => {
    const invalid = !(
      child instanceof THREE.SpriteMaterial ||
      child instanceof ResourceReference
    );

    return invalid;
  };

  addChildren(threeObject, children) {
    if (process.env.NODE_ENV !== 'production') {
      invariant(children.filter(this._invalidChild).length === 0,
        'Sprite children can only be materials!');
    } else {
      invariant(children.filter(this._invalidChild).length === 0, false);
    }
  }

  addChild(threeObject, child) {
    this.addChildren(threeObject, [child]);
  }

  moveChild() {
    // doesn't matter
  }
}


module.exports = SpriteDescriptor;

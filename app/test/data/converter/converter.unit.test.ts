import Converter from '../../../src/data/converter/Converter';
import TablesRepository from '../../../src/data/table/TablesRepository';
import ItemValue from '../../../src/data/items/ItemValue';
import ItemsRepository from '../../../src/data/items/ItemsRepository';
import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';
import { SuccessConvertResult } from '../../../src/data/converter/ConvertResult';

_chai.should();
_chai.expect;

@suite class ConverterTest {

  private converter: Converter;
  private tablesRepository: TablesRepository = new TablesRepository();

  before() {
    this.tablesRepository = new TablesRepository()
    this.converter = new Converter(this.tablesRepository);
  }

  @test 'simple convert should be success' () {
    const convertResult = this.converter.convert(
        new ItemValue(ItemsRepository.Rouble, Number(100)), 
        new ItemValue(ItemsRepository.COLD, 0),
        2024,
      )
    expect(convertResult instanceof SuccessConvertResult).true;
  }

}
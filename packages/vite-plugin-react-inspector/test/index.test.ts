import { describe, expect, it } from 'vitest'
import { parseFilePath } from '../src/utils'
describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

it('multiple platforms path splice test', () => {
  const OSX = '/Users/user/Desktop/test/test.jsx:1:1'
  expect(parseFilePath(OSX)).toEqual(['/Users/user/Desktop/test/test.jsx', '1', '1'])
  const WINDOWS = 'D:/test/test.jsx:1:1'
  expect(parseFilePath(WINDOWS)).toEqual(['D:/test/test.jsx', '1', '1'])
  const LINUX = '/Users/user/Desktop/test/test.jsx:1:1'
  expect(parseFilePath(LINUX)).toEqual(['/Users/user/Desktop/test/test.jsx', '1', '1'])
})

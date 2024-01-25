import run from '@miirmoon/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({pkg})
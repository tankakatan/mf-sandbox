
    export type RemoteKeys = 'remote_lib/Button';
    type PackageType<T> = T extends 'remote_lib/Button' ? typeof import('remote_lib/Button') :any;
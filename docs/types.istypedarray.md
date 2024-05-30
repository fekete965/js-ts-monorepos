<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@shlack/types](./types.md) &gt; [isTypedArray](./types.istypedarray.md)

## isTypedArray() function

Check whether a given value is an array where each member is of a specified type

**Signature:**

```typescript
export declare function isTypedArray<T>(arr: unknown, check: (x: any) => x is T): arr is T[];
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

arr


</td><td>

unknown


</td><td>

array to check


</td></tr>
<tr><td>

check


</td><td>

(x: any) =&gt; x is T


</td><td>

type guard to use when evaluating each item


</td></tr>
</tbody></table>
**Returns:**

arr is T\[\]

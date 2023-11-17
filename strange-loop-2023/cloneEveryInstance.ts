map(
    clone,
    map(
      t => containing(arg, t),
      every(instance, trap())
    )
)

every(instance, trap())
    .map(t => containing(arg, t))
    .forEach(clone)

clone <| containing(arg) <| every(instance) <| trap


// trap | every(instance) | containing(arg) | clone


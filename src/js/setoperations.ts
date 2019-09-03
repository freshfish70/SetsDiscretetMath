export class SetOperationEasy {
	/**
	 * Universal set used as base for some operations
	 */
	private universalSet: Set<number>

	/**
	 * Creates the SetOperation object, and assign
	 * provided universalSet.
	 *
	 * @param universalSet the universal set, used for some comparisons
	 */
	constructor(universalSet: Set<number> | Array<number>) {
		if (universalSet instanceof Set) {
			this.universalSet = universalSet
		} else {
			this.universalSet = this.arrayToSet(universalSet)
		}
	}

	/**
	 * Returns the univeral set
	 */
	getUniversalSet() {
		return this.universalSet
	}

	/**
	 * Returns the cadninality of a set.
	 * A cardinality of a set is the count of elements in a set
	 *
	 * @param set the set to get cardinality on
	 */
	cardinality(set: Set<number>): number {
		return set.size
	}

	/**
	 * Returns the union of two sets.
	 * The union of two sets is a merge of multiple sets.
	 *
	 * @param setA set to perform union on
	 * @param setB set to perform union on
	 */
	union(setA: Set<number>, setB: Set<number>): Set<number> {
		const unionArray = [...Array.from(setA), ...Array.from(setB)]
		let unionSet = new Set<number>(unionArray)
		return unionSet
	}

	/**
	 * Returns the intersections of two sets.
	 * The intersections of two sets is the elements which are
	 * members in both sets.
	 *
	 * @param setA set to find intersection on
	 * @param setB set to find intersection on
	 */
	intersection(setA: Set<number>, setB: Set<number>): Set<number> {
		let intersectionSet = new Set<number>()
		setA.forEach(setNumber => {
			if (setB.has(setNumber)) intersectionSet.add(setNumber)
		})
		return intersectionSet
	}

	/**
	 * Returns the difference between two sets.
	 * The difference is baseSet - exludeSet. Which means it will return baseSet
	 * without elements which occurs in both and elements of excludeSet.
	 * @param baseSet set to excludefrom
	 * @param exludeSet set with members which should be exluded from baseSet
	 */
	difference(baseSet: Set<number>, exludeSet: Set<number>): Set<number> {
		let differenceSet = new Set(Array.from(baseSet))
		exludeSet.forEach(setNumber => {
			differenceSet.delete(setNumber)
		})
		return differenceSet
	}

	/**
	 * Returns the complement of the provided set compared to the univeral set.
	 * The complement of a set is all members of the universal set which is
	 * not included in the provided set.
	 */
	complement(set: Set<number>): Set<number> {
		let complementSet = new Set<number>(Array.from(this.getUniversalSet()))
		set.forEach(setNumber => {
			complementSet.delete(setNumber)
		})
		return complementSet
	}

	/**
	 * Returns true if a given number/text is element of a set.
	 *
	 * @param set the set to compare
	 * @param element the element to find in a set
	 */
	isElementOf(set: Set<number>, element: number): boolean {
		return set.has(element)
	}

	/**
	 * Returns true if all members of partSet is
	 * also members of set compareSet
	 *
	 * @param partSet the set which can be part the compareSet
	 * @param compareSet the set to compare to
	 */
	isPartOf(partSet: Set<number>, compareSet: Set<number>): boolean {
		let ispartof = true
		let completed = false

		let i = 0
		let partSetElement = Array.from(partSet)
		while (ispartof && !completed && partSetElement.length > 0) {
			if (!compareSet.has(partSetElement[i])) ispartof = false
			i++
			if (partSetElement.length == i) completed = true
		}
		return partSetElement.length > 0 ? ispartof : false
	}

	/**
	 * Returns true if setA does not include any members of setB; or vice versa
	 *
	 * @param setA set to check for mutual exclusion
	 * @param setB set to check for mutual exclusion
	 */
	isMututalExclusive(setA: Set<number>, setB: Set<number>): boolean {
		let isMututalExclusive = true
		let completed = false

		let i = 0
		let partSetElement = Array.from(setA)
		while (isMututalExclusive && !completed && partSetElement.length > 0) {
			if (setB.has(partSetElement[i])) isMututalExclusive = false
			i++
			if (partSetElement.length == i) completed = true
		}
		return partSetElement.length > 0 ? isMututalExclusive : false
	}

	/**
	 * Returns the set from an array
	 * @param setArray the array to create set from
	 */
	arrayToSet(setArray: Array<number>): Set<number> {
		return new Set<number>(setArray)
	}
}

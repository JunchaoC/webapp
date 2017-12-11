package com.p2p.dao;

import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.p2p.entity.Movie;
import com.p2p.entity.User;


public class MovieDao extends HibernateDaoSupport {
    private static final Log log = LogFactory.getLog(MovieDao.class);
	//property constants
	public static final String MOVIENAME = "moviename";
	public static final String MOVIEIMAGEURL = "movieimageUrl";
	public static final String Grade = "grade";
    
    public void save(Movie transientInstance) {
        log.debug("saving Movie instance");
        try {
            getSession().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
    public void updateImplement(Movie transientInstance){
		this.getHibernateTemplate().update(transientInstance);
	}
    
    public void deleteImplement(Movie transientInstance){
		this.getHibernateTemplate().delete(transientInstance);
	}
    
	public void delete(Movie persistentInstance) {
        log.debug("deleting Movie instance");
        try {
            getSession().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Movie findById( java.lang.Integer id) {
        log.debug("getting Movie instance with id: " + id);
        try {
            Movie instance = (Movie) getSession()
                    .get("com.p2p.entity.Movie", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List findByExample(Movie instance) {
        log.debug("finding User instance by example");
        try {
            List results = getSession()
                    .createCriteria("com.p2p.entity.Movie")
                    .add(Example.create(instance))
            .list();
            log.debug("find by example successful, result size: " + results.size());
            return results;
        } catch (RuntimeException re) {
            log.error("find by example failed", re);
            throw re;
        }
    }    
    
    public List findByProperty(String propertyName, Object value) {
      log.debug("finding User instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Movie as model where model." 
         						+ propertyName + "= ?";
         Query queryObject = getSession().createQuery(queryString);
		 queryObject.setParameter(0, value);
		 return queryObject.list();
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	public List findByMoviename(Object moviename) {
		return findByProperty(MOVIENAME, moviename);
	}
	
	public List findByMovieimageUrl(Object movieimageUrl) {
		return findByProperty(MOVIEIMAGEURL, movieimageUrl);
	}
	
	public List findAll() {
		log.debug("finding all Movie instances");
		try {
			String queryString = "from Movie";
	         Query queryObject = getSession().createQuery(queryString);
			 return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public List findAll(int start,int limit) { //用于假分页?
		log.debug("finding all Movie instances");
		try {
			String queryString = "from Movie ";
	         Query queryObject = getSession().createQuery(queryString);
	         //真分页查询?
	         queryObject.setFirstResult(start);
	         queryObject.setMaxResults(limit);
	         
			 return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Movie merge(Movie detachedInstance) {
        log.debug("merging User instance");
        try {
        	Movie result = (Movie) getSession()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Movie instance) {
        log.debug("attaching dirty Movie instance");
        try {
            getSession().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Movie instance) {
        log.debug("attaching clean Movie instance");
        try {
            getSession().lock(instance, LockMode.NONE);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
}